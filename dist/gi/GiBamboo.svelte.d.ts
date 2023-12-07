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
export type GiBambooProps = typeof __propDef.props;
export type GiBambooEvents = typeof __propDef.events;
export type GiBambooSlots = typeof __propDef.slots;
export default class GiBamboo extends SvelteComponentTyped<GiBambooProps, GiBambooEvents, GiBambooSlots> {
}
export {};
