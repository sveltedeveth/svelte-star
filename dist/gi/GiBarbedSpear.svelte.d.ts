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
export type GiBarbedSpearProps = typeof __propDef.props;
export type GiBarbedSpearEvents = typeof __propDef.events;
export type GiBarbedSpearSlots = typeof __propDef.slots;
export default class GiBarbedSpear extends SvelteComponentTyped<GiBarbedSpearProps, GiBarbedSpearEvents, GiBarbedSpearSlots> {
}
export {};
