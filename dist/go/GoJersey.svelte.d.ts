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
export type GoJerseyProps = typeof __propDef.props;
export type GoJerseyEvents = typeof __propDef.events;
export type GoJerseySlots = typeof __propDef.slots;
export default class GoJersey extends SvelteComponentTyped<GoJerseyProps, GoJerseyEvents, GoJerseySlots> {
}
export {};
