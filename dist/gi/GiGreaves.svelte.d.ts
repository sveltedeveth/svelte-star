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
export type GiGreavesProps = typeof __propDef.props;
export type GiGreavesEvents = typeof __propDef.events;
export type GiGreavesSlots = typeof __propDef.slots;
export default class GiGreaves extends SvelteComponentTyped<GiGreavesProps, GiGreavesEvents, GiGreavesSlots> {
}
export {};
