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
export type MdStreetviewProps = typeof __propDef.props;
export type MdStreetviewEvents = typeof __propDef.events;
export type MdStreetviewSlots = typeof __propDef.slots;
export default class MdStreetview extends SvelteComponentTyped<MdStreetviewProps, MdStreetviewEvents, MdStreetviewSlots> {
}
export {};
