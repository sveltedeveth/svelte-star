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
export type GiAnatomyProps = typeof __propDef.props;
export type GiAnatomyEvents = typeof __propDef.events;
export type GiAnatomySlots = typeof __propDef.slots;
export default class GiAnatomy extends SvelteComponentTyped<GiAnatomyProps, GiAnatomyEvents, GiAnatomySlots> {
}
export {};
