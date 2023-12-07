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
export type IoMdLogInProps = typeof __propDef.props;
export type IoMdLogInEvents = typeof __propDef.events;
export type IoMdLogInSlots = typeof __propDef.slots;
export default class IoMdLogIn extends SvelteComponentTyped<IoMdLogInProps, IoMdLogInEvents, IoMdLogInSlots> {
}
export {};
