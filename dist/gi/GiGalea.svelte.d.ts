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
export type GiGaleaProps = typeof __propDef.props;
export type GiGaleaEvents = typeof __propDef.events;
export type GiGaleaSlots = typeof __propDef.slots;
export default class GiGalea extends SvelteComponentTyped<GiGaleaProps, GiGaleaEvents, GiGaleaSlots> {
}
export {};
