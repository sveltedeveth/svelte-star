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
export type GiCandyCanesProps = typeof __propDef.props;
export type GiCandyCanesEvents = typeof __propDef.events;
export type GiCandyCanesSlots = typeof __propDef.slots;
export default class GiCandyCanes extends SvelteComponentTyped<GiCandyCanesProps, GiCandyCanesEvents, GiCandyCanesSlots> {
}
export {};
