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
export type GoSignInProps = typeof __propDef.props;
export type GoSignInEvents = typeof __propDef.events;
export type GoSignInSlots = typeof __propDef.slots;
export default class GoSignIn extends SvelteComponentTyped<GoSignInProps, GoSignInEvents, GoSignInSlots> {
}
export {};
