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
export type GiUpCardProps = typeof __propDef.props;
export type GiUpCardEvents = typeof __propDef.events;
export type GiUpCardSlots = typeof __propDef.slots;
export default class GiUpCard extends SvelteComponentTyped<GiUpCardProps, GiUpCardEvents, GiUpCardSlots> {
}
export {};
