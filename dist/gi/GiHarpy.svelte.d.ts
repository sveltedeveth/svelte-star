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
export type GiHarpyProps = typeof __propDef.props;
export type GiHarpyEvents = typeof __propDef.events;
export type GiHarpySlots = typeof __propDef.slots;
export default class GiHarpy extends SvelteComponentTyped<GiHarpyProps, GiHarpyEvents, GiHarpySlots> {
}
export {};
