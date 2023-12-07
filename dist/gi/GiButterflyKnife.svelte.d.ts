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
export type GiButterflyKnifeProps = typeof __propDef.props;
export type GiButterflyKnifeEvents = typeof __propDef.events;
export type GiButterflyKnifeSlots = typeof __propDef.slots;
export default class GiButterflyKnife extends SvelteComponentTyped<GiButterflyKnifeProps, GiButterflyKnifeEvents, GiButterflyKnifeSlots> {
}
export {};
