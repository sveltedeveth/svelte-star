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
export type GiShinyPurseProps = typeof __propDef.props;
export type GiShinyPurseEvents = typeof __propDef.events;
export type GiShinyPurseSlots = typeof __propDef.slots;
export default class GiShinyPurse extends SvelteComponentTyped<GiShinyPurseProps, GiShinyPurseEvents, GiShinyPurseSlots> {
}
export {};
