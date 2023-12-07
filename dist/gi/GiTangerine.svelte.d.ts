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
export type GiTangerineProps = typeof __propDef.props;
export type GiTangerineEvents = typeof __propDef.events;
export type GiTangerineSlots = typeof __propDef.slots;
export default class GiTangerine extends SvelteComponentTyped<GiTangerineProps, GiTangerineEvents, GiTangerineSlots> {
}
export {};
