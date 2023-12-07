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
export type DiRubyProps = typeof __propDef.props;
export type DiRubyEvents = typeof __propDef.events;
export type DiRubySlots = typeof __propDef.slots;
export default class DiRuby extends SvelteComponentTyped<DiRubyProps, DiRubyEvents, DiRubySlots> {
}
export {};
