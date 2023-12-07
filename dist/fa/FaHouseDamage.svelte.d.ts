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
export type FaHouseDamageProps = typeof __propDef.props;
export type FaHouseDamageEvents = typeof __propDef.events;
export type FaHouseDamageSlots = typeof __propDef.slots;
export default class FaHouseDamage extends SvelteComponentTyped<FaHouseDamageProps, FaHouseDamageEvents, FaHouseDamageSlots> {
}
export {};
