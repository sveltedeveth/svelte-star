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
export type GiVisoredHelmProps = typeof __propDef.props;
export type GiVisoredHelmEvents = typeof __propDef.events;
export type GiVisoredHelmSlots = typeof __propDef.slots;
export default class GiVisoredHelm extends SvelteComponentTyped<GiVisoredHelmProps, GiVisoredHelmEvents, GiVisoredHelmSlots> {
}
export {};
