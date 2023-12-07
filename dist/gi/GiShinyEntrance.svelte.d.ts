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
export type GiShinyEntranceProps = typeof __propDef.props;
export type GiShinyEntranceEvents = typeof __propDef.events;
export type GiShinyEntranceSlots = typeof __propDef.slots;
export default class GiShinyEntrance extends SvelteComponentTyped<GiShinyEntranceProps, GiShinyEntranceEvents, GiShinyEntranceSlots> {
}
export {};
