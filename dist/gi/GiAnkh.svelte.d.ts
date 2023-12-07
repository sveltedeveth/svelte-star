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
export type GiAnkhProps = typeof __propDef.props;
export type GiAnkhEvents = typeof __propDef.events;
export type GiAnkhSlots = typeof __propDef.slots;
export default class GiAnkh extends SvelteComponentTyped<GiAnkhProps, GiAnkhEvents, GiAnkhSlots> {
}
export {};
