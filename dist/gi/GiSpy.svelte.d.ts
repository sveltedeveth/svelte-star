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
export type GiSpyProps = typeof __propDef.props;
export type GiSpyEvents = typeof __propDef.events;
export type GiSpySlots = typeof __propDef.slots;
export default class GiSpy extends SvelteComponentTyped<GiSpyProps, GiSpyEvents, GiSpySlots> {
}
export {};
