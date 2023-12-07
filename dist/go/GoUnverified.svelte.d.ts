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
export type GoUnverifiedProps = typeof __propDef.props;
export type GoUnverifiedEvents = typeof __propDef.events;
export type GoUnverifiedSlots = typeof __propDef.slots;
export default class GoUnverified extends SvelteComponentTyped<GoUnverifiedProps, GoUnverifiedEvents, GoUnverifiedSlots> {
}
export {};
