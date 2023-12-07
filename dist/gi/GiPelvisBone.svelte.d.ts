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
export type GiPelvisBoneProps = typeof __propDef.props;
export type GiPelvisBoneEvents = typeof __propDef.events;
export type GiPelvisBoneSlots = typeof __propDef.slots;
export default class GiPelvisBone extends SvelteComponentTyped<GiPelvisBoneProps, GiPelvisBoneEvents, GiPelvisBoneSlots> {
}
export {};
