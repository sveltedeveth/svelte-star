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
export type DiCssTricksProps = typeof __propDef.props;
export type DiCssTricksEvents = typeof __propDef.events;
export type DiCssTricksSlots = typeof __propDef.slots;
export default class DiCssTricks extends SvelteComponentTyped<DiCssTricksProps, DiCssTricksEvents, DiCssTricksSlots> {
}
export {};
