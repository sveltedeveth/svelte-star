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
export type GiCircleSparksProps = typeof __propDef.props;
export type GiCircleSparksEvents = typeof __propDef.events;
export type GiCircleSparksSlots = typeof __propDef.slots;
export default class GiCircleSparks extends SvelteComponentTyped<GiCircleSparksProps, GiCircleSparksEvents, GiCircleSparksSlots> {
}
export {};
