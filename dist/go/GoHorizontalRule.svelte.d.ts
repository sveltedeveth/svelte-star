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
export type GoHorizontalRuleProps = typeof __propDef.props;
export type GoHorizontalRuleEvents = typeof __propDef.events;
export type GoHorizontalRuleSlots = typeof __propDef.slots;
export default class GoHorizontalRule extends SvelteComponentTyped<GoHorizontalRuleProps, GoHorizontalRuleEvents, GoHorizontalRuleSlots> {
}
export {};
