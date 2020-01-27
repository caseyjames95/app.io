import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import SignUpContext from '../../utils/SignUpContext'
import { FormControl, Input, InputLabel, FormHelperText, Button,
    InputAdornment, IconButton, CircularProgress } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import './UserForm.css'

const useStyles = makeStyles(theme => ({    
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    }
  }))

const UserForm = _ => {

    const styles = useStyles()

    const {  title, firstName, lastName, email, phone, location,
         timezone, handleInputChange, handleSubmitButton, showPassword, 
            handleShowPassword, handleMouseDownPassword, errors, isLoading, 
                password, verifyPassword } = React.useContext(SignUpContext)

    return (
        <form id="UFS" >
            <h2 id="user-modal-title">User Sign-Up</h2>
            <div>
                <FormControl>
                    <InputLabel htmlFor="email">Email: (required)</InputLabel>
                    <Input 
                        id="email" 
                        name="email"
                        aria-describedby="email-helper-text" 
                        onChange={handleInputChange}
                        value={email}
                        variant="outlined"
                        error={
                            errors.some( e => e.message.toLowerCase().includes('email') ? true : false )
                        }
                    />
                    <FormHelperText id="email-helper-text">
                        {
                            errors.some( e => e.message.toLowerCase().includes('email') ? 'error' : '' )
                        }
                    </FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="firstName">First Name:  (required)</InputLabel>
                    <Input 
                        id="firstName" 
                        name="firstName"
                        aria-describedby="firstName-helper-text" 
                        onChange={handleInputChange}
                        value={firstName}
                    />
                    <FormHelperText id="firstName-helper-text"></FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="lastName">Last Name:  (required)</InputLabel>
                    <Input 
                        id="lastName" 
                        name="lastName"
                        aria-describedby="lastName-helper-text" 
                        onChange={handleInputChange}
                        value={lastName}
                    />
                    <FormHelperText id="lastName-helper-text"></FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input 
                        id="title" 
                        name="title"
                        aria-describedby="title-helper-text" 
                        onChange={handleInputChange}
                        value={title}
                    />
                    <FormHelperText id="title-helper-text"></FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="phone">Phone #</InputLabel>
                    <Input 
                        id="phone" 
                        name="phone"
                        aria-describedby="phone-helper-text" 
                        onChange={handleInputChange}
                        value={phone}
                    />
                    <FormHelperText id="phone-helper-text"></FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="location">Location</InputLabel>
                    <Input 
                        id="location" 
                        name="location"
                        aria-describedby="location-helper-text" 
                        onChange={handleInputChange}
                        value={location}
                    />
                    <FormHelperText id="location-helper-text"></FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="timezone">Timezone</InputLabel>
                    <Input 
                        id="timezone" 
                        name="timezone"
                        aria-describedby="timezone-helper-text" 
                        onChange={handleInputChange}
                        value={timezone}
                    />
                    <FormHelperText id="timezone-helper-text"></FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="password">Password  (required)</InputLabel>
                    <Input 
                        id="password" 
                        name="password"
                        aria-describedby="password-helper-text"
                        type={showPassword ? 'text' : 'password'} 
                        onChange={handleInputChange}
                        value={password}
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                        error={
                            errors.some( e => e.message.toLowerCase().includes('password') ? true : false )
                        }
                    />
                    <FormHelperText id="password-helper-text">
                        {
                            errors.some( e => e.message.toLowerCase().includes('password') ? e.message : '' )
                        }
                    </FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="verifyPassword">Verify Password  (required)</InputLabel>
                    <Input 
                        id="verifyPassword"
                        name="verifyPassword"
                        aria-describedby="verifyPassword-helper-text" 
                        onChange={handleInputChange}
                        value={verifyPassword}
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                        error={
                            errors.some( e => e.message.toLowerCase().includes('password') ? true : false )
                        }
                    />
                    <FormHelperText id="verifyPassword-helper-text">
                        {
                            errors.some( e => e.message.toLowerCase().includes('password') ? e.message : '' )
                        }
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={styles.wrapper}>
                <Button 
                    disabled={isLoading}
                    onClick={handleSubmitButton}
                >
                    Submit
                </Button>
                {isLoading && <CircularProgress size={24} className={styles.buttonProgress} />}
            </div>
        </form>
    )
}

export default UserForm