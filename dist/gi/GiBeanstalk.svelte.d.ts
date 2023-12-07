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
export type GiBeanstalkProps = typeof __propDef.props;
export type GiBeanstalkEvents = typeof __propDef.events;
export type GiBeanstalkSlots = typeof __propDef.slots;
export default class GiBeanstalk extends SvelteComponentTyped<GiBeanstalkProps, GiBeanstalkEvents, GiBeanstalkSlots> {
}
export {};
