import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosLogInProps = typeof __propDef.props;
export type IoIosLogInEvents = typeof __propDef.events;
export type IoIosLogInSlots = typeof __propDef.slots;
export default class IoIosLogIn extends SvelteComponentTyped<IoIosLogInProps, IoIosLogInEvents, IoIosLogInSlots> {
}
export {};
