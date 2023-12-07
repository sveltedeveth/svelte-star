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
export type GiTrousersProps = typeof __propDef.props;
export type GiTrousersEvents = typeof __propDef.events;
export type GiTrousersSlots = typeof __propDef.slots;
export default class GiTrousers extends SvelteComponentTyped<GiTrousersProps, GiTrousersEvents, GiTrousersSlots> {
}
export {};
