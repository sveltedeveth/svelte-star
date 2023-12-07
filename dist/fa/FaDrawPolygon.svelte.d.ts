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
export type FaDrawPolygonProps = typeof __propDef.props;
export type FaDrawPolygonEvents = typeof __propDef.events;
export type FaDrawPolygonSlots = typeof __propDef.slots;
export default class FaDrawPolygon extends SvelteComponentTyped<FaDrawPolygonProps, FaDrawPolygonEvents, FaDrawPolygonSlots> {
}
export {};
