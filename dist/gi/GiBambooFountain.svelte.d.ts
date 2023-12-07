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
export type GiBambooFountainProps = typeof __propDef.props;
export type GiBambooFountainEvents = typeof __propDef.events;
export type GiBambooFountainSlots = typeof __propDef.slots;
export default class GiBambooFountain extends SvelteComponentTyped<GiBambooFountainProps, GiBambooFountainEvents, GiBambooFountainSlots> {
}
export {};
