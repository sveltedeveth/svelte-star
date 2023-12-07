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
export type GoRubyProps = typeof __propDef.props;
export type GoRubyEvents = typeof __propDef.events;
export type GoRubySlots = typeof __propDef.slots;
export default class GoRuby extends SvelteComponentTyped<GoRubyProps, GoRubyEvents, GoRubySlots> {
}
export {};
