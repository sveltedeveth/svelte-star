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
export type GoLawProps = typeof __propDef.props;
export type GoLawEvents = typeof __propDef.events;
export type GoLawSlots = typeof __propDef.slots;
export default class GoLaw extends SvelteComponentTyped<GoLawProps, GoLawEvents, GoLawSlots> {
}
export {};
