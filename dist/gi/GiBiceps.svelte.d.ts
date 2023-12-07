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
export type GiBicepsProps = typeof __propDef.props;
export type GiBicepsEvents = typeof __propDef.events;
export type GiBicepsSlots = typeof __propDef.slots;
export default class GiBiceps extends SvelteComponentTyped<GiBicepsProps, GiBicepsEvents, GiBicepsSlots> {
}
export {};
