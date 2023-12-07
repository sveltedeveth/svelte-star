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
export type GiBullHornsProps = typeof __propDef.props;
export type GiBullHornsEvents = typeof __propDef.events;
export type GiBullHornsSlots = typeof __propDef.slots;
export default class GiBullHorns extends SvelteComponentTyped<GiBullHornsProps, GiBullHornsEvents, GiBullHornsSlots> {
}
export {};
