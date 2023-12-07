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
export type GiGooeySwordProps = typeof __propDef.props;
export type GiGooeySwordEvents = typeof __propDef.events;
export type GiGooeySwordSlots = typeof __propDef.slots;
export default class GiGooeySword extends SvelteComponentTyped<GiGooeySwordProps, GiGooeySwordEvents, GiGooeySwordSlots> {
}
export {};
