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
export type GiCampfireProps = typeof __propDef.props;
export type GiCampfireEvents = typeof __propDef.events;
export type GiCampfireSlots = typeof __propDef.slots;
export default class GiCampfire extends SvelteComponentTyped<GiCampfireProps, GiCampfireEvents, GiCampfireSlots> {
}
export {};
