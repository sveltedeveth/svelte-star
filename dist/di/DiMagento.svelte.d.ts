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
export type DiMagentoProps = typeof __propDef.props;
export type DiMagentoEvents = typeof __propDef.events;
export type DiMagentoSlots = typeof __propDef.slots;
export default class DiMagento extends SvelteComponentTyped<DiMagentoProps, DiMagentoEvents, DiMagentoSlots> {
}
export {};
