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
export type DiRubyRoughProps = typeof __propDef.props;
export type DiRubyRoughEvents = typeof __propDef.events;
export type DiRubyRoughSlots = typeof __propDef.slots;
export default class DiRubyRough extends SvelteComponentTyped<DiRubyRoughProps, DiRubyRoughEvents, DiRubyRoughSlots> {
}
export {};
