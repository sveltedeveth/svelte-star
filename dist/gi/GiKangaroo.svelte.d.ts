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
export type GiKangarooProps = typeof __propDef.props;
export type GiKangarooEvents = typeof __propDef.events;
export type GiKangarooSlots = typeof __propDef.slots;
export default class GiKangaroo extends SvelteComponentTyped<GiKangarooProps, GiKangarooEvents, GiKangarooSlots> {
}
export {};
