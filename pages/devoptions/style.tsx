import styled from "styled-components";

const StyledSection = styled.section`
    height: 90vh;
    width: 90vw;
    margin: 5vh auto;

    border: solid 3px gray;

    .api_test {
        margin: 10px;
        border: solid 1px gray;
        padding: 5px;

        .input_group {
            display: flex;
            justify-content: space-between;;
            flex-wrap: wrap;
            margin: 10px 30px;

            .custom_input {
                label {
                    margin-right: 5px;
                }
            }
        }

        .response {
            min-height: 100px;
            background-color: #ddd;
            border: solid 1px gray;
            margin: 0 20px 10px;
            font-family: monospace;
            padding: 10px;

            p {
                margin: 5px 0;
            }
        }
    }
`

export default StyledSection