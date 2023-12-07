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
export type GiZipperProps = typeof __propDef.props;
export type GiZipperEvents = typeof __propDef.events;
export type GiZipperSlots = typeof __propDef.slots;
export default class GiZipper extends SvelteComponentTyped<GiZipperProps, GiZipperEvents, GiZipperSlots> {
}
export {};
