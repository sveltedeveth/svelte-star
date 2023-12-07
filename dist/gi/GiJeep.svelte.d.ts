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
export type GiJeepProps = typeof __propDef.props;
export type GiJeepEvents = typeof __propDef.events;
export type GiJeepSlots = typeof __propDef.slots;
export default class GiJeep extends SvelteComponentTyped<GiJeepProps, GiJeepEvents, GiJeepSlots> {
}
export {};
