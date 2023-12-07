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
export type GiSharkBiteProps = typeof __propDef.props;
export type GiSharkBiteEvents = typeof __propDef.events;
export type GiSharkBiteSlots = typeof __propDef.slots;
export default class GiSharkBite extends SvelteComponentTyped<GiSharkBiteProps, GiSharkBiteEvents, GiSharkBiteSlots> {
}
export {};
