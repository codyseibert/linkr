class linkr::profile::db (
) {

  if defined (Firewall['101 allow db access externally']) == false {
    firewall { '101 allow db access externally':
      dport   => [3306],
      proto  => tcp,
      action => accept,
    }
  }

  class { '::mysql::server':
    override_options => {
      mysqld => { bind-address => '0.0.0.0'}
    },
    databases   => {
      'linkr'  => {
        ensure  => 'present',
        charset => 'utf8',
      },
    },
    grants => {
      'linkr@%/linkr.*' => {
        ensure     => 'present',
        options    => ['GRANT'],
        privileges => ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
        table      => 'linkr.*',
        user       => 'linkr@%',
      },
    },
    users => {
      'linkr@%' => {
        ensure                   => 'present',
        max_connections_per_hour => '0',
        max_queries_per_hour     => '0',
        max_updates_per_hour     => '0',
        max_user_connections     => '0',
        password_hash            => '*11A9062C0914BDED584F42162D770125ACA0F7CE',
      }
    }
  }

}
