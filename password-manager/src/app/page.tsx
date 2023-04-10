import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <div className='brand'>
            <a href=''>
              <i className='fa fa-lock' aria-hidden='true'></i>&nbsp;Password
              Manager
            </a>
          </div>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a></a>
            </li>
            <li>
              <a>SignUp</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
            <form action='.' method='POST'>
              <input type='submit' id='logout-btn' name='logout' />
            </form>

            <li>
              <a href=''>View</a>
            </li>
            <li>
              <a href=''>Add</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <!--Display messages-->
    <div class="messages" style="text-align: center;">
          <p>

                <i class="fa fa-exclamation" aria-hidden="true"></i>

                <i class="fa fa-check" aria-hidden="true"></i>

              &nbsp;{message}
          </p>

    </div> */}

      {/* Confirm email */}
      <div className='text-align: center;'>
        <form action='.' method='POST' role='form'>
          <h2>Please confirm your email.</h2>
          <p>Check your email and get the code.</p>
          <input
            type='text'
            name='code'
            placeholder='enter the 6 digit code ...'
          />
          <input type='text' name='user' value='null' />
          <input type='submit' value='Confirm' name='confirm' />
        </form>
      </div>

      {/* modals */}
      <div className='modals-wrapper'>
        <span id='close-modal' title='close'>
          <i className='fa fa-times' aria-hidden='true'></i>
        </span>
        {/* <!--login modal--> */}
        <div className='modal' id='login-modal'>
          <form action='.' role='form' method='POST'>
            <h2>Login</h2>
            <input type='text' name='username' placeholder='username' />
            <input type='password' name='password' placeholder='password' />
            <input type='submit' value='login' name='login-form' />
          </form>
        </div>

        {/* <!--signup modal--> */}
        <div className='modal' id='signup-modal'>
          <form action='.' role='form' method='POST'>
            <h2>SignUp</h2>
            <input type='text' name='username' placeholder='username' />
            <input type='email' name='email' placeholder='email' />

            <input type='password' name='password' placeholder='password' />
            <input
              type='password'
              name='password2'
              placeholder='confirm password'
            />
            <input type='submit' value='register' name='signup-form' />
          </form>
        </div>

        {/* <!--add password modal--> */}
        <div className='modal' id='add-password-modal'>
          <form action='.' role='form' method='POST'>
            <h2>Add new password</h2>
            <input type='text' name='url' placeholder='url of website' />
            <input type='email' name='email' placeholder='email' />
            <input type='password' name='password' placeholder='password' />
            <input type='submit' value='save' name='add-password' />
          </form>
        </div>
      </div>

      <div className='container'>
        {/* <!--One card--> */}
        <div className='card'>
          <div className='actions'>
            &nbsp;Actions{' '}
            <i className='fa fa-arrow-down' aria-hidden='true'></i>
            <a href='javascript:;' className='action-item'>
              Delete
            </a>
            <form action='.' method='POST'>
              <input type='text' name='password-id' value='{{password.id}}' />
              <input
                type='submit'
                id='delete-btn{{password.id}}'
                name='delete'
              />
            </form>
          </div>
          <img width='50' height='50' src='{{password.logo}}' alt='' />
          <div className='name'> </div>
          {/* <!-- password modal--> */}
          <input type='email' name='email' value='{{password.email}}' />
          <i className='fas fa-copy copy' title='copy to clipboard'></i>
          <input
            type='password'
            name='username'
            value='{{password.password}}'
          />
          <i className='fas fa-copy copy' title='copy to clipboard'></i>
        </div>
      </div>

      <footer>
        <a href=''>Link To The Project</a>
      </footer>
    </main>
  );
}
