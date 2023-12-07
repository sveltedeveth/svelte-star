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
export type GiHorusProps = typeof __propDef.props;
export type GiHorusEvents = typeof __propDef.events;
export type GiHorusSlots = typeof __propDef.slots;
export default class GiHorus extends SvelteComponentTyped<GiHorusProps, GiHorusEvents, GiHorusSlots> {
}
export {};
