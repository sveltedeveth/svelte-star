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
export type GoSignOutProps = typeof __propDef.props;
export type GoSignOutEvents = typeof __propDef.events;
export type GoSignOutSlots = typeof __propDef.slots;
export default class GoSignOut extends SvelteComponentTyped<GoSignOutProps, GoSignOutEvents, GoSignOutSlots> {
}
export {};
