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
export type GiPersonProps = typeof __propDef.props;
export type GiPersonEvents = typeof __propDef.events;
export type GiPersonSlots = typeof __propDef.slots;
export default class GiPerson extends SvelteComponentTyped<GiPersonProps, GiPersonEvents, GiPersonSlots> {
}
export {};
