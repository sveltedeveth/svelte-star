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
export type GiChampionsProps = typeof __propDef.props;
export type GiChampionsEvents = typeof __propDef.events;
export type GiChampionsSlots = typeof __propDef.slots;
export default class GiChampions extends SvelteComponentTyped<GiChampionsProps, GiChampionsEvents, GiChampionsSlots> {
}
export {};
