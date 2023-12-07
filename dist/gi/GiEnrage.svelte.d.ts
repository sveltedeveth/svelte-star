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
export type GiEnrageProps = typeof __propDef.props;
export type GiEnrageEvents = typeof __propDef.events;
export type GiEnrageSlots = typeof __propDef.slots;
export default class GiEnrage extends SvelteComponentTyped<GiEnrageProps, GiEnrageEvents, GiEnrageSlots> {
}
export {};
