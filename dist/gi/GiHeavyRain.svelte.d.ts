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
export type GiHeavyRainProps = typeof __propDef.props;
export type GiHeavyRainEvents = typeof __propDef.events;
export type GiHeavyRainSlots = typeof __propDef.slots;
export default class GiHeavyRain extends SvelteComponentTyped<GiHeavyRainProps, GiHeavyRainEvents, GiHeavyRainSlots> {
}
export {};
